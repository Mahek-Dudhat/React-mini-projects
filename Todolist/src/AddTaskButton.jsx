import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function AddTaskButton({action}) {

    return (<>
        <Button variant="outlined" onClick={action} endIcon={<SearchIcon />}>
            ADD
        </Button>
    </>);
}