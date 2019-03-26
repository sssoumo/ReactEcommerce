

export const validate = (element, formdata=[]) => {
    let error = [true, '']

    if(element.validation.email){
        const valid = 	
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(element.value);
        const message = `${!valid? 'Must be a valid email':''}`;
        error= !valid? [valid,message]:error
    }

    if(element.validation.required){
        const valid= element.value.trim() !== '';
        const message = `${!valid? 'This field is required': ''}`
        error = !valid ? [valid, message] : error
    }
    return error
}

export const update =(element, formdata, formname) => {
    const newFormData = {
        ...formdata
    }
    const newElement = {
        ...newFormData[element.id]
    }

    newElement.value= element.event.target.value;

    if(element.blur){
        let validData = validate(newElement, formdata) 
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur
    newFormData[element.id] = newElement;

    return newFormData;
}