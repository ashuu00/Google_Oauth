/* write a function to retrive a blob
of json using an ajax request 
'fetch' function used to get some json values from
anywhere */
//fetch is an promise function
function fetchAlbums(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
.then(res=>res.json())//res is the response obj
//as res.json() is another promise we need 
//add another then
//get access to underline data

.then(json=>console.log(json));
}

fetchAlbums();
//async and await
//first identify requests that are 
//asynchronous
//put async in front of the function
//identify the promises
//put await in front of all the 
//promises function
//give data type to these await funct

//Here is the refactored code

async function fetchAlbum(){
    //const fetchAlbumss=aunc()=>{}
    //using arrow functions
    let res=await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    let json=await res.json();
    console.log(json);
    }