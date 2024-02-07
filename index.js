function userCredentials(email,password){
    const validEmail="mukisaangel@gmail.com";
    const validPassword="22/U/6369@2024";

    if(email===validEmail && password===validPassword){
        console.log(`User email is ${email},login successfully!`);
    }else{
        console.log("Invalid User credentials!");
    }
    

}

userCredentials("mukisaangel@gmail.com","22/U/6369@2024");