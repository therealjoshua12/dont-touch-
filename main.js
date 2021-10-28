var name_of_student_array=[];
function insert(){
    var name_1=document.getElementById("classmate_1").value;
    var name_2=document.getElementById("classmate_2").value;
    var name_3=document.getElementById("classmate_3").value;
    var name_4=document.getElementById("classmate_4").value;

    name_of_student_array.push(name_1);
    name_of_student_array.push(name_2);
    name_of_student_array.push(name_3);
    name_of_student_array.push(name_4);
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML=name_of_student_array;
    document.getElementById("a_bucket").style.display="none";
    document.getElementById("without_flex_seal").style.display="inline-block";
}
function sorting(){
    name_of_student_array.sort(); console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML=name_of_student_array;
   
}