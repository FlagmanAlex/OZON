import { Autocomplete, TextField } from "@mui/material"


export const InputForm = () => {

    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
      ];

    return (
    <div className="">
        <Autocomplete 
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => 
            <TextField 
                {...params} 
                label="Введите"
                color="error"
                variant="outlined"
                size="small"
            />}
        />
    </div>
  )
}
