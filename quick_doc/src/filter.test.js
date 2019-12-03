import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import FilterMenu from './filter.js'

test('Filter (page2) successfully renders the doctors info', ()=>{
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
        "licenses": [{
            "state": "CA"
        }, {
            "number": "G59480",
            "state": "CA"
        }],
        "uid": "039898ea958ba96aca4e2c28494d0b02",
        "npi": "1912085705"
    };
    const setdoc = jest.fn();
    const {getByTestId} = render(<FilterMenu pagestate = {{page,setpage}} doctors={doctor} settingdoctor = {{doctor,setdoc}}/>);

    expect(getByTestId("Doctor1").textContent).toBe("Terry Anderson")

})

