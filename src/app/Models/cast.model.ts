
export interface Cast {
    movieID:number;
    castList: Array<{
        adult:boolean;
        name: string;
        profile_path: string;
        character:string;
        gender:number;
        known_for_department:string;
        id:number;
        popularity:number;
        original_name:string;
        credit_id:string;
        cast_id:number;
        order:number;
    }>;
}
