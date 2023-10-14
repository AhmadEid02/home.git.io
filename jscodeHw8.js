// let cal=(x)=>{
//     let le = x.length;
//     let words = x.split(" ").filter((word) => word!="").length;
//     let sent = x.split(".").filter((sen) => sen!="").length;
//     console.log("number of char is: "+le)
//     console.log("number of words is: "+words)
//     console.log("number of words is: "+sent)
// }
// let x = "Lorem ipsum. dolor sit amet consectetur."
// cal(x);
let calc=()=>{
    let txt= document.getElementById("Textarea1").value;
    console.log(txt)
    let le = txt.length;
    let words = txt.split(" ").filter((word) => word!="").length;
    let sent = txt.split(".").filter((sen) => sen!="").length;
    console.log("number of char is: "+le)
    console.log("number of words is: "+words)
    console.log("number of words is: "+sent)
    document.getElementById("len").textContent="Number of char: "+le;
    document.getElementById("word").textContent="Number of words: "+words;
    document.getElementById("sent").textContent="Number of sentences: "+sent;
}
