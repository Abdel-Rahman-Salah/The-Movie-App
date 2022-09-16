export interface MovieDetails {
    budget: Number;
    genres:Array<{
        id:number;
        name:string;
    }>;
    homepage: String;
    movieID: Number;
    imdb_id: String;
    overview: String;
    release_date: String;
    revenue: Number;
    runtime: Number;
    status: String;
    backdrop_path: String;
    tagline: String;
    title: String;
}