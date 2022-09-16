import { Movie } from "./movie.model";

export interface MoviePage {
 
    content: Array<Movie>;
    empty:Boolean;
    first:Boolean;
    last:Boolean;
    number:number;
    numberOfElements:number;
    pageable:Array<{
        offset:Number;
        pageNumber:Number;
        pageSize:Number;
        paged:Boolean;
        sort:Array<{
            empty:Boolean;
            sorted:Boolean;
            unsorted:Boolean;
        }>;
        unpaged:Boolean
    }>;
    size:number;
    sort:Array<{
        empty:Boolean;
        sorted:Boolean;
        unsorted:Boolean;
    }>;
   
    totalPages:Number;
    totalElements:number;
}