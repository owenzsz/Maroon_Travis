import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import FilterMenu from './filter.js'

test('Filter (page2) successfully renders the doctors info', ()=>{
    let clickCardio = jest.fn();
    let page = 2;
    let setpage = jest.fn()
    const doctor = {
        "profile": {
            "first_name": "Terry",
            "middle_name": "Jane",
            "last_name": "Anderson",
            "slug": "terry-anderson-md",
            "title": "MD",
            "image_url": "https://asset4.betterdoctor.com/images/549a6a314214f875200005b3-2_thumbnail.jpg",
            "gender": "female",
            "languages": [{
                "name": "English",
                "code": "en"
            }],
            "bio": "Dr. Terry Anderson is a cardiologist in Oakland, California and is affiliated with Dameron Hospital. She received her medical degree from University of Cincinnati College of Medicine and has been in practice for 29 years. She is one of 26 doctors at Dameron Hospital who specialize in Cardiovascular Disease."
        },
        "specialties": [{
            "uid": "cardiologist",
            "name": "Cardiovascular Disease",
            "description": "Specializes in heart problems.",
            "category": "medical",
            "actor": "Cardiologist",
            "actors": "Cardiologists"
        }],
    };
    const setdoc = jest.fn();
    const {getByTestId} = render(<FilterMenu pagestate = {page,setpage} doctors={doctor} settingdoctor = {doctor,setdoc}/>);

    //test 1: checks for content
    expect(getByTestId("Doctor1").textContent).toBe("Terry Anderson")

    //test 1: checks for interaction
    fireEvent.click(getByTestId('clickCardio'))
    expect(doctor).toHaveBeenCalledWith(settingdoctor.doctor)
    expect(doctor).toHaveBeenCalledTimes(1);

})

