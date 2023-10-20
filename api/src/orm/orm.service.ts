import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import {
  FieldValue,
  getFirestore
} from 'firebase-admin/firestore';

@Injectable()
export class OrmService {
  public async insertDocument<T>(collectionName: string, doc: T): Promise<T> {
    const createdAt = FieldValue.serverTimestamp();
    try {
      const snapshot = await getFirestore()
        .collection(collectionName)
        .add({ ...doc, createdAt });
      return { id: snapshot.id, ...doc } as T;
    } catch (error) {
      console.error(error.message);
      throw new Error(`Failed to insert document: ${error.message}`);
    }
  }
  public async insertDocumentByCustomId<T>(
    collectionName: string,
    id: string,
    doc: T,
  ): Promise<T> {
    try {
      const snapshot = await getFirestore()
        .collection(collectionName)
        .doc(id)
        .set({ ...doc, createdAt: FieldValue.serverTimestamp() });
      return { id, ...doc } as T;
    } catch (error) {
      console.error(error.message);
      throw new Error(`Failed to insert document: ${error.message}`);
    }
  }

  public async updateDocumentById<T>(
    collection: string,
    docId: string,
    data: {},
  ): Promise<T> {
    try {
      const docRef = await getFirestore().collection(collection).doc(docId);
      await docRef.update(data);
      const snapshot = await docRef.get();
      const updatedData = snapshot.data();
      if (updatedData.createdAt) {
        updatedData.createdAt = updatedData.createdAt.toDate();
      }
      return updatedData as T;
    } catch (error) {
      console.error(error.message);
      throw new Error(`Failed to insert document: ${error.message}`);
    }
  }

  public async findOne<T>(
    collectionName: string,
    fieldName: string,
    fieldValue: string,
  ): Promise<T> {
    try {
      let document = null;
      const snapshot = await getFirestore()
        .collection(collectionName)
        .where(fieldName, '==', fieldValue)
        .get();
      if (!snapshot.empty) {
        snapshot.forEach((doc) => (document = { id: doc.id, ...doc.data() }));
      }
      return document as T;
    } catch (error) {
      console.error(error.message);
      throw new Error(`Failed to insert document: ${error.message}`);
    }
  }
  public async findDocumentsByFieldName<T>(
    collectionName: string,
    fieldName: string,
    fieldValue: any,
  ): Promise<T[]> {
    try {
      let documents = [];
      const snapshot = await getFirestore()
        .collection(collectionName)
        .where(fieldName, '==', fieldValue)
        .get();
      if (!snapshot.empty) {
        snapshot.forEach((doc: any) => {
          const data = doc.data();
          if (data.createdAt) {
            data.createdAt = data.createdAt.toDate();
          }
          documents.push({ id: doc.id, ...data });
        });
      }
      return documents;
    } catch (error) {
      console.error(error.message);
      throw new Error(`Failed to insert document: ${error.message}`);
    }
  }

  public async findSpecificFieldData<T>(
    collectionName: string,
    fieldName: string
  ): Promise<T[]> {
    try {
      let documents = [];
      const snapshot = await getFirestore()
        .collection(collectionName)
        .get();
      if (!snapshot.empty) {
        snapshot.forEach((doc: any) => {
          const data = doc.data();
          if (data[fieldName]) {
            documents.push(data[fieldName]);
          }
        });
      }
      return documents;
    } catch (error) {
      console.error(error.message);
      throw new Error(`Failed to insert document: ${error.message}`);
    }
  }
  public async findDocumentById<T>(
    collectionName: string,
    id: string,
  ): Promise<T> {
    try {
      const snapshot = await getFirestore()
        .collection(collectionName)
        .doc(id)
        .get();

      if (!snapshot.exists) {
        throw new Error('doc not found');
      }
      const data = snapshot.data();
      if (data.createdAt) {
        data.createdAt = data.createdAt.toDate();
      }

      return { id: snapshot.id, ...data } as T;
    } catch (error) {
      console.error(error.message);
      throw new Error(`error: ${error.message}`);
    }
  }
  public async findExistDocumentById(collectionName: string, id: string) {
    try {
      const docRef = getFirestore().collection(collectionName).doc(id);
      const snapshot = await docRef.get();
      return snapshot.exists;
    } catch (error) {
      console.error(error.message);
      throw new Error(`error: ${error.message}`);
    }
  }

  async findGameAssets(folderRef: string, assetId: string) {
    try {
      const bucket = admin.storage().bucket();
      const prefix = `${folderRef}/${assetId}/`;
      const [files] = await bucket.getFiles({ prefix });
      const assetUrls = files.map((file) => file.metadata.mediaLink);
      return assetUrls;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }

  createDocumentRef(ref: string) {
    const docRef = getFirestore().doc(ref);
    return docRef;
  }
  async countCollectionDocuments(ref: string) {
    const snapshot = await getFirestore().collection(ref).count().get();
    return snapshot.data().count;
  }

  async deleteDocumentsByFieldName(
    collection: string,
    fieldName: string,
    fieldValue: any,
  ) {
    const likesSnapshot = await getFirestore()
      .collection(collection)
      .where(fieldName, '==', fieldValue)
      .get();

    const docs = [];

    for (const doc of likesSnapshot.docs) {
      docs.push(doc.data());
      await doc.ref.delete();
    }
    return docs;
  }
  async getDocumentsFromSubCollection<T>(
    collection: string,
    queryField: string,
    ref: any,
    startAt?: string,
    limit?: number,
  ): Promise<T> {
    const page = startAt ? startAt : '0';
    const size = limit ? limit : 10;

    const likesRef = await getFirestore()
      .collectionGroup(collection)
      .orderBy('createdAt', 'desc')
      .where(queryField, '==', ref)
      .startAt(page)
      .limit(size)
      .get();

    const documents = [];

    likesRef.forEach((doc) => {
      const data = doc.data();

      if (data.createdAt) {
        data.createdAt = data.createdAt.toDate();
      }
      documents.push({ id: doc.id, ...data });
    });
    return documents as T;
  }

  async isDocumentsExist(collection: string, field: string, value: any) {
    const snapshot = await getFirestore()
      .collection(collection)
      .where(field, '==', value)
      .get();
    const docs = [];
    snapshot.forEach((doc) => {
      docs.push(doc.data());
    });
    const isExist = docs.length > 0;
    return isExist;
  }

  async getDocuments(collection: string) {
    const snapshot = await getFirestore()
      .collection(collection)
      .get();
    const docs = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.createdAt) {
        data.createdAt = data.createdAt.toDate();
      }
      docs.push(data);
    });
    return docs;
  }
  async getDocumentsWithLimit(docRef: any, startAt?: string, limit?: number) {
    const size = limit || 20;
    const fromStart = startAt || '0';
    const snapshot = await getFirestore()
      .collection(docRef)
      .orderBy('createdAt', 'desc')
      .startAt(fromStart)
      .limit(size)
      .get();
    const docs = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.createdAt) {
        data.createdAt = data.createdAt.toDate();
      }
      docs.push(data);
    });
    return docs;
  }

  public async getDocumentsByFieldNameWithDesc<T>(
    ref: string,
    field: string,
    value: string,
    startAt?: string,
    limit?: number,
  ): Promise<T[]> {
    try {
      const size = limit || 20;
      const fromStart = startAt || '0';
      let documents = [];
      const snapshot = await getFirestore()
        .collection(ref)
        .where(field, '==', value)
        .orderBy('createdAt', 'desc')
        .startAt(fromStart)
        .limit(size)
        .get();
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.createdAt) {
          data.createdAt = data.createdAt.toDate();
        }
        documents.push({ id: doc.id, ...data });
      });
      return documents;
    } catch (error) {
      console.error(error.message);
      throw new Error(`Failed to insert document: ${error.message}`);
    }
  }
  //Genarate Urls for uploaded files
  async genarateFileUrl(
    name: string,
    url: string,
    imgUrls: { [key: string]: string },
  ) {
    const fileName = name.substring(name.lastIndexOf('/') + 1);
    const fileKey = fileName.split(/[-.]/g).join('_');
    imgUrls[fileKey] = url;
  }
}