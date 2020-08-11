import axios from 'axios';

// axois create makes an instact to refer to. 
export default axios.create({
    // Addes the base url to the front of any url passed in the calls
    baseURL: 'https://api.unsplash.com',
    
    // Adds headers to all calls using this instance
    headers: {
        Authorization: 'Client-ID KYxgSvuXjjgYdHCrLUFblTLRPOX75Cw7BRZM5VTYNb4'
    }
});