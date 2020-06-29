import React, { SelectHTMLAttributes } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import BaseSelect from '@material-ui/core/Select';
import IPlan from '../../dtos/IPlan';

const useStyles = makeStyles((theme: Theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  plans: IPlan[];
}

const Select: React.FC<ISelectProps> = ({ plans }) => {
  const classes = useStyles();

  return (
    <div>
      {/* <FormControl className={classes.formControl}> */}
      <InputLabel id="demo-simple-select-label">Plano</InputLabel>
      <BaseSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >

        {plans.map((plan) => (
          <MenuItem value={plan.id} key={plan.id}>{plan.name}</MenuItem>
        ))}
      </BaseSelect>
      {/* </FormControl> */}

    </div>
  );
};
export default Select;
