var images = 
["kissclipart-mom-and-two-kids-cartoon-clipart-child-parent-moth-94ba19d041220abd.jpg",
 "unamed.jpg","older-brother-two-kids-going-to-school-funny-cartoon-characters-pupils-design-educational-banners-150332223.jpg",
 "pngtree-cartoon-cute-lady-sister-playing-illustration-character-business-material-girl-illustrationstylish-png-image_4053896.jpg",
 "pp.jpg"];

 var names = ["Family Book","Nausheen Baig","Asif Siraj","Humza Hussain", "Aleeza Hussain","Muhammad Hussain"];

 var i = 0;
 function update()
 {
  
 i++;
 var numbers_of_family_member_in_array = 5
 if(i > numbers_of_family_member_in_array)
 {
   i = 0;
 }

 var updateImage = images[i];
 var updatedName = names[i];
 document.getElementById("family_member_image").src = updatedImage;
 document.getElementById("family_member_name").innerhtml = updatedName;
}