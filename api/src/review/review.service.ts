import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewService{
    async getAllReviews(){
        return 'All Review returned...'
    }
}