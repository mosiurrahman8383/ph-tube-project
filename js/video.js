//get hour , minute and second
function setTime(second){
    const hour = parseInt(second / 3600);
    const minute= parseInt(((second % 3600) / 60));
    const seconds = second % 60;
    return `${hour} hours, ${minute} minutes, ${seconds} seconds ago`
}

const removeActiveClass = ()=>{
    const button = document.getElementsByClassName("category-btn");
    console.log(button);
    for(const btn of button){
        btn.classList.remove("active")
    }
};


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


const loadCategoryVideos = (id) =>{
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => {
        //remove active class
        removeActiveClass()
        //add active class
        const activeBtn = document.getElementById(`btn-${id}`);
        // console.log(activeBtn)
        activeBtn.classList.add("active");
        displayVideos(data.category);
    })
    
    .catch(error => console.log(error))
};

const loadDetails =async (videoId) =>{
    // console.log(videoId);
    const uri= `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(uri);
    const data = await res.json();
    displayDetails(data.video)
};

const displayDetails = (video)=>{
    console.log(video);
    const detailsContainer = document.getElementById('modalContent');
    detailsContainer.innerHTML= 
    `
    <img class="" src="${video.thumbnail}" alt="">
    <p>${video.description}</p>
    
    `

    // way: 01
    // document.getElementById('showModalData').click();

    // way: 02

    document.getElementById('coustomeModal').showModal();
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
    const containerVideos = document.getElementById('videos');
    containerVideos.innerHTML= "";
    // console.log(videos);

    if(videos.length === 0){
        containerVideos.classList.remove("grid")
        containerVideos.innerHTML = `
        <div class=" flex flex-col justify-center items-center gap-4">
        <img src="assets/Icon.png" >
         <h2 class="text-2xl font-bold ">NO Content Here in this Category</h2>
        </div>
        
        
        `
        
    }
    else{
        containerVideos.classList.add("grid");
    }

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

                 ${item.others.posted_date?.length === 0? "" :`<span class="absolute bg-black text-white text-xs right-2 bottom-2">${setTime(item.others.posted_date)}</span>` }
                
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

                    
            <p>
            <button onclick="loadDetails('${item.video_id}')" class="btn btn-sm btn-error">
            Details
            </button>
            </p>
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

const  displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories');

    categories.forEach((item) => {

        // console.log(item);
        //creat buttons
        

        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML =
        `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
         ${item.category}
         </button>
        `;

        //append in container
        categoriesContainer.append(buttonContainer)


    });
}

loadCategories();
loadVideos();