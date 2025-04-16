// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://kpwpstzikseodruhtcrm.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwd3BzdHppa3Nlb2RydWh0Y3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDMzMTksImV4cCI6MjA2MDM3OTMxOX0.M8yWeiUkIVy-A34qY8Tgz2bW4_TKFVrphB7MIPphIaU';
// const supabase = createClient(supabaseUrl, supabaseKey);

// export async function addMessageToDB(name,mail,phone,subject,message){
//     const {data,error} = await supabase
//     .from("message")
//     .insert([{name, mail, phone, subject, message}])
//     .select();
//     if(error){
//         console.error("Error adding message:", error.message)
//         return null;
//     }
//     return data.length>0 ? data[0] : null;
// }

// export async function getMessageFromDB(){
//     const {data: message,error} = await supabase
//     .from("message")
//     .select("*");

//     if(error){
//         console.error("Error fetching message:",error)
//         return[];
//     }
//     return message;
// }

// export async  function deleteMessageFromDB(id){
//     const{data, error} = await supabase
//     .from("message")
//     .delete()
//     .eq("id",id);

//     if(error) {
//         console.error("Error deleting message:",error);
//         return null;
//     }
//     return data;
// }

// export async function updateMessageInDB(expenseId, updateName, updatePhone, updateSubject, updateMessage) {
//     try{
//         const {data,error} = await supabase
//         .from("message")
//         .update({name:updateName, phone:updatePhone, subject:updateSubject, message:updateMessage})
//         .eq("id",expenseId);

//         if(error){
//             console.error("Error object:"+ JSON.stringify(error,null,2))
//         }else{
//             console.log("Message updated:" ,data);
//         }
//     }catch(err){
//         console.error("Error updating Message:",err);
//     }
// }