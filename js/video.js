//1. fetch , load and categoried on html

//creat loadCategories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}

// {
//     "category_id": "1001",
//     "video_id": "aaab",
//     "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     "title": "Midnight Serenade",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             "profile_name": "Noah Walker",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "543K",
//         "posted_date": ""
//     },
//     "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }

const displayVideos = (videos) => {
    const containerVideos = document.getElementById('videos')
    // console.log(videos);

    videos.forEach((item) => {
        console.log(item)
        const card = document.createElement('div');
        card.classList = "card ";
        card.innerHTML =
            `
        <figure class = "h-[200px] relative">
             <img class="rounded-2xl h-full w-full object-cover"
                src="${item.thumbnail}"
                 alt="thumbnail" />
                <span class="absolute bg-black text-white right-2 bottom-2">${item.others.posted_date}</span>
        </figure>
            <div class="py-3 flex gap-4 ">
                <div >
                    <img class ="h-10 w-10 rounded-full" src="${item.authors[0].profile_picture}" alt="">
                </div>
                <div>
                    <h3 class = "text-xl font-bold">${item.title}</h3>
                    <div class="flex gap-3 items-center">
                        <p>${item.authors[0].profile_name}</p>

                        ${(item.authors[0].verified) === true ? `<img class="h-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" >` : ""}
                       
                    </div>
                    <p>${item.others.views} views</p>
            </div>  
        </div>
        `
        containerVideos.append(card)
    })

}


//creat displayCategories


// {
//     "category_id": "1001",
//     "category": "Music"
// }

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');

    categories.forEach((item) => {

        // console.log(item);
        //creat buttons

        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;

        //append in container
        categoriesContainer.append(button)


    });
}

loadCategories();
loadVideos();