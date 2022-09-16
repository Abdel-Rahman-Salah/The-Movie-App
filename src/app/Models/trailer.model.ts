export interface Trailer {
    movieID:number;
    trailersList: Array<{
        iso_639_1:String;
        iso_3166_1:String;
        name:String
        key:String;
        size:Number;
        site:String;
        type:String;
        official:boolean;
        published_at:String;
        id:String;
    }>;

}