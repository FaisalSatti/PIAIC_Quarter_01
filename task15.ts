var guest_list=["Father","Mother","Ex"];
guest_list.forEach(function (value) {
    console.log("Dear "+value+", I would like to invite you to dinner. Hopefully you will come.");
});
console.log("As "+guest_list[2]+" informed me that she can't make to the dinner.");
guest_list.splice(2,2,"Tabeer");
guest_list.forEach(function (value) {
    console.log("Dear "+value+", I would like to invite you to dinner. Hopefully you will come.");
});