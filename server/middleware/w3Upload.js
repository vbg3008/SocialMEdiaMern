import { create } from "@web3-storage/w3up-client";
import { readFileSync } from 'fs';

const client = await create();
// console.log(client);
const myAccount = await client.login('vbgvbg76@gmail.com');
console.log("trying to login");

const space = await client.createSpace("my-testing-space"); //creating space

export const  w3Upload = async (picturePath) => {

    try {
       
        await myAccount.provision(space.did());// provisioninng space
        await space.save(); // saving space locally
        await client.setCurrentSpace(space.did());// setting current space locally
    
    
        const recovery = await space.createRecovery(myAccount.did());//adding a delegation and recovery method 
        await client.capability.access.delegate({
          space: space.did(),
          delegations: [recovery],
        });
    
        // const fileContents = readFileSync('./random.txt' , 'utf8');
        // console.log(fileContents);
       const fileContents= readFileSync(picturePath);
    
        const files =  new File([fileContents],picturePath) //saving files to web3
           
          const directoryCid = await client.uploadFile(files)
          console.log(`uploaded file to web3 storage:${directoryCid} and type is ${typeof directoryCid}`);
          console.log(`https://${directoryCid}.ipfs.w3s.link`);
    
        //   client.remove(directoryCid).then(console.log('removed'))
          return `https://${directoryCid}.ipfs.w3s.link`;
    
          
    
    
      } catch (err) {
        console.error(err);
      }
    

}

