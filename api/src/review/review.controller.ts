import { Controller, Get } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController{
    constructor(private readonly reviewService:ReviewService) {}
    @Get()
    getAllReviews(){
        const data = this.reviewService.getAllReviews();
        return data;
    }
}