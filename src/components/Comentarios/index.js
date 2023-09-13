import  {  DiscussionEmbed  }  from  'disqus-react';

export default function Comentarios(){
    < DiscussionEmbed 
        shortname = 'exemplo' 
        config = { 
            { 
                url : "http://localhost:3001/3",
                identificador : "1", 
                título : "titulo" , 
                idioma : 'zh_TW'  //por exemplo, para chinês tradicional (Taiwan)	 
            } 
        } 
    ></DiscussionEmbed>
}
