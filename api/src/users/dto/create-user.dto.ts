export class CreateUserDto {
    email: string;
    password: string;
    displayName: string;
    emailVerified?: boolean;
    photoURL?: string | null;
    userId: string
}
