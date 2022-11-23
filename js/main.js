const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=30"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Collegare il container principale al file js
const wrapper = document.getElementById('container');

// Stampare dinamicamente gli elementi dell'array nell'html
posts.forEach(post => {

    wrapper.innerHTML += 
    `
        <div class="post">
            <div class="post-header">
                <div class="user-pic">
                    <img src=${post.author.image}>
                </div>            
                <div class="post-user">
                    <div class="user-name">
                        ${post.author.name}
                    </div>
                    <div class="date">    
                        <em>${post.created}</em>
                    </div>    
                </div>
            </div>
            <div class="post-text">
                ${post.content}
            </div>
            <div class="post-image">
                <img src="${post.media}">
            </div>
            <div class="post-footer">    
                <div class="like">
                    <i class="fa-regular fa-heart"></i>
                    Like
                </div>    
                <div class="like-number" id=${addIds()}>
                    Piace a ${post.likes} persone
                </div>
            </div>            
        </div>
    `;

    
});

// Collegare i pulsanti like al file JS

const likeIt = document.getElementsByClassName('like');
// Ritorna una html collection

const arrayLikeIt = [...likeIt];
// Con l'uso dello spread operator si è convertita la html collection in un array di modo da poter usare l'addeventlistener tramite foreach
// console.log(arrayLikeIt);


arrayLikeIt.forEach(element => {
    
    element.addEventListener('click' , 
        function(){
            
            element.classList.add('liked');

            for(let i = 0; i < posts.length; i++){

                posts[i].likes++;

                console.log(posts[i]);
                // const likeText = document.getElementsByClassName('like-number');

                // const arrayLikeText = [...likeText];

                // console.log(arrayLikeText);

                // arrayLikeText.innerHTML = `Piace a ${posts[i].likes} persone`

            }
            
        }    
    );

});



// Functions
function addIds(){

    let likeNumber = document.getElementsByClassName('like-number');

    let id = 1;

    for (let x = 0; x < likeNumber.length; x++){

        likeNumber[x].id = 'likenumber' + id++;

    }

}