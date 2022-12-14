

export class Authentication {
 error = ""
 success = ""
 
    constructor(){ 
    }


   signUp (name:string,email:string,password:string){
    if (name === "" || password === "" || email ===""){
      this.error = "Check empty fields"
    }
    else{
    this.error = "fields not empty"
    }

   

  }

login(){

}

}

export class BackendData {

  constructor(){

  }
}