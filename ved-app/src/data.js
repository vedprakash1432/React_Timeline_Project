class Moment {
   static data=[
    {
     timestamp: new Date().getTime(),
     text: "happy birthday baby",
     user: {
       id: 1,
       name: 'Hachiko',
       avatar: 'http://www.croop.cl/UI/twitter/images/russel.jpg'
     },
     comments: [
       { from: 'Irom man', text: 'happy bday' },
       { from: 'Irom man', text: 'happy bday' }
     ]
   },
   {
     timestamp: new Date().getTime(),
     text: "happy birthday babu",
     user: {
       id: 1,
       name: 'ved',
       avatar: 'http://www.croop.cl/UI/twitter/images/carl.jpg'
     },
     comments: [
       { from: 'Irom man', text: 'happy bday' }
     ]
   },
   {
     timestamp: new Date().getTime(),
     text: "happy birthday babu",
     user: {
       id: 1,
       name: 'brock',
       avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
     },
     comments: [
       { from: 'Irom man', text: 'happy bday' },
       { from: 'Irom man', text: 'happy bday' },
       { from: 'Irom man', text: 'happy bday' }
     ]
   }
 ];
}
export default Moment;