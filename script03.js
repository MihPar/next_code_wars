// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(submit) {
    let result = 'Nothing';
   
     for (let i = 0; i < submit.length; i++) {
       if (submit[i] === result) {
         result = 'Nothing';
       } else {
         result = submit[i];
       }
     }
   
     return result;
   }

   console.log(likeOrDislike("Like"))
   console.log(likeOrDislike("Dislike"))
   console.log(likeOrDislike("Nothing"))