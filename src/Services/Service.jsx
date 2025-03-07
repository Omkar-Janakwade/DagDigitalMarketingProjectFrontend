import axios from 'axios'
import React from 'react'

export class Services{
  // static serverURL="https://www.directadmissionguideline.com/api"
  static serverURL="http://localhost:8080"

  // SERVICE APIs
  static getAllServices() {
    const dataURL=`${this.serverURL}/getAllServices`
    return axios.get(dataURL)
  }

  // CAREER APIs
  static getAllCareer(){
    const dataURL=`${this.serverURL}/getallcarrer`
    return axios.get(dataURL)
  }

  static async addInquiry(formData){
    const dataURL=`${this.serverURL}/addInquiry`
    const response= await axios.post(dataURL,formData)
    return response
  }

}
