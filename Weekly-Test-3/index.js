const express = require('express');
const app = express();

app.use(express.json());

app.post('/register', (req, res, next) => {
    const { firstName, lastName, password, email, phone } = req.body;
    
    // First Name and Last Name Validation
    if (!firstName) {
        return next(new Error('First Name required.'));
    }else if ( !lastName){
        return next(new Error('Last Name required.'));
    }
    if (firstName[0] !== firstName[0].toUpperCase()) {
        return next(new Error('First Name first letter must start with a capital letter.'));
    }else if(lastName[0] !== lastName[0].toUpperCase()){
        return next(new Error('Last Name first letter must start with a capital letter.'));
    }
    
    // Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
        return next(new Error('Please Enter a password'));
    }else if(!passwordRegex.test(password)){
        return next(new Error('Password must be at least 8 characters long and include one special character, one uppercase letter, and one numeric character.'));
    }
    
    // Email Validation
    if (!email) {
        return next(new Error('Please enter a email id'));
    }else if(!email.includes('@')){
        return next(new Error('Email address must contains @ symbol'));
    }
    
    // Phone Number Validation
    if (!phone) {
        return next(new Error('Please enter a phone No.'));
    }else if(phone.length < 10){
        return next(new Error('Phone number must be at least 10 digits long.'));
    }
    
    res.status(200).send('User registered successfully');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(400).json({ error: err.message });
});


app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
});
