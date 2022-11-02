const User = require('../models/user.model');
const people = require('../assets/people.json');
const fs = require('fs');
const fileName = 'chao.txt';

class UserController{
    get(req,res){
        // return res.status(200).json('Chào mừng bạn đến đây !');
        const filter = req.query.filter;
        // console.log('filter', filter);
        const filterPeople = people.filter((person) => 
          person.first_name.includes(filter)
        );

        try {  
            var data = fs.readFileSync(fileName, 'utf8');
            return res.status(200).json({data: data});
            // console.log(data.toString());    
        } catch(e) {
            console.log('Error:', e.stack);
            return res.status(200).json({error: 'Không thể đọc File'});
        }   
        //Viết mới dữ liệu vào file
        // fs.writeFile('mynewfile3.txt', 'Hello content! Chào mừng bạn đến đây !', function (err) {
        // if (err) {
        //     console.log('Error', err);
        // } else {
        //     console.log('Saved!');
        // }
        
        // });
        //Thêm dữ liệu vào file
        // fs.appendFile('mynewfile3.txt', '\nThêm vào text file', function (err) {
        //     if (err) {
        //         console.log('Error', err);
        //     } else {
        //         console.log('Saved!');
        //     }
            
        //     });

        // return res.status(200).json({data: filterPeople, length: filterPeople.length});
    }

    post(req,res){
        const filter = req.body.access_token;
        // console.log('filter', filter);
        fs.appendFile(fileName, `\nChào bạn ${filter}`, function (err) {
            if (err) {
                console.log('Error', err);
            } else {
                console.log('Saved!');
            }
            
            });
        return res.status(200).json({result:`Chào bạn ${filter}` + filter});
    }
}

module.exports = new UserController();