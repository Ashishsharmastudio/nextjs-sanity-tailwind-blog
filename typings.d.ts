export interface Post{
    _id: string;
    publishedAt: string;
    title: string;
    author: {
        name:string;
        image:string;
    };
        //comments: comments[];
        description: string;
        mainimage: {
            Asset: {
              url: string;
            };
        };
        slug: {
            current: string;
        };
        body: [object];
    
}
    
