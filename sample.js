

//             //parametrs  
// function add(x,y)
// {
//    return x+y;
// }

//                //arguments are outside of the fn 
// console.log(add(2,3));
// console.log(add(3,102));


// function getFirst(arr)
// {
//     return arr[0]
// }

// console.log(getFirst([1,2,3]));





const desc="largest countries"
const arr=["india","china","USA"]
function generateSentence(desc, arr) {
    let list=""
    for(let x of arr)
    {
        list+=x+" "
        console.log(list);
    }
    
    console.log(`${desc} ${list}`)
}












const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const containerEl =document.getElementById("container")

function render(imgs)
{
    let listItems=""
    
    for(let i=0;i<imgs.length;i++)
    {
        listItems+=`
            <img class="team-img" src="images/hip1.jpg">
            <img class="team-img" src="images/hip2.jpg">
            <img class="team-img" src="images/hip3.jpg">
        `   
    }
    
    containerEl.innerHTML=listItems
}

render(imgs)



