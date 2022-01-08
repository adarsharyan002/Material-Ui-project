import { DvrTwoTone } from '@mui/icons-material';
import { useEffect } from 'react'
import { useState } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import NoteCard from './Card';
import { Container } from '@mui/material';

 const  Notes=() => {

  const [notes,setNotes]= useState([]);

useEffect(()=>{
  fetch('http://localhost:8000/notes')
  .then(res=>res.json())
  .then((data)=>{ setNotes(data)})
},[])

const handleDelete= async (id)=>{
 await fetch('http://localhost:8000/notes/'+id,{
  method:"DELETE"
}
  )
    const newNotes = notes.filter(note=>note.id !=id)
    setNotes(newNotes);
}

  return (
    <Container>
      <Grid container spacing={3}>

     {notes.map((note)=>{
       return(
         <Grid lg={4} xs={12} md={6} item key={note.id}> 
       
         <NoteCard handleDelete={handleDelete}  note={note}/>
         </Grid>
       
       )
     })}
    </Grid>
    </Container>
  )
}


export default Notes;