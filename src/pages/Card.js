
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import { DeleteOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';


const NoteCard = ({note,handleDelete}) => {
    return ( 
        <Card elevation={3}>
       
        <CardHeader
        action={
            <IconButton onClick={()=>handleDelete(note.id)} >
             <DeleteOutlined />
            </IconButton >
          }
        title={note.title}
        subheader={note.category}
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.details}
        </Typography>
      </CardContent>
        </Card>

     );
}
 
export default NoteCard;