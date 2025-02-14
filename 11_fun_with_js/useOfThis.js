

function Video(title) { 
    this.title = title; 
    console.log("Constructor function called!");
}

Video("JavaScript Tutorial");
console.log(global.title); // in node.js this inside a function refers to global object 


const video = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this,tag); // ye vala this is referring to global object 
            //and window object in case of browsers , so we can't use this.tile
        });
    }
};

video.showTags();

/*
const video = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach((tag)=>{
            console.log(this,tag); 
        });
    }
};

video.showTags();*/
/*
forEach takes callback function .
we know inside an object , if a function is there then this will be pointing 
to the current object , which works fine when we are writing 
"this.tags.forEach", but inside forEach there is a callback function which 
is not a method , which means it is not a method of the object , and if a
function is not a method of an object , then this refers to global object 
in node.js and window in browsers , also if arrow functions are used instead 
of regular functions then we know arrow functions don't have their own this 
instead they inherit from the surrounding lexical scope, Here, the 
surrounding scope is the showTags() method, where this refers to the 
video object.
*/