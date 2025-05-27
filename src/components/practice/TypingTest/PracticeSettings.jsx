import {
  Paper, Grid, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import {
  Settings, TrendingUp, Timer
} from '@mui/icons-material';

const PracticeSettings = ({
  level,
  mode,
  duration,
  handleLevelChange,
  handleModeChange,
  handleDurationChange
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 2,
        background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)'
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Difficulty Level</InputLabel>
            <Select
              value={level}
              onChange={handleLevelChange}
              label="Difficulty Level"
              startAdornment={<Settings sx={{ mr: 1, color: 'primary.main' }} />}
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Practice Mode</InputLabel>
            <Select
              value={mode}
              onChange={handleModeChange}
              label="Practice Mode"
              startAdornment={<TrendingUp sx={{ mr: 1, color: 'primary.main' }} />}
            >
              <MenuItem value="time">Time Mode</MenuItem>
              <MenuItem value="text">Text Completion</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Duration</InputLabel>
            <Select
              value={duration}
              onChange={handleDurationChange}
              label="Duration"
              startAdornment={<Timer sx={{ mr: 1, color: 'primary.main' }} />}
              disabled={mode === 'text'}
            >
              <MenuItem value={30}>30 seconds</MenuItem>
              <MenuItem value={60}>1 minute</MenuItem>
              <MenuItem value={120}>2 minutes</MenuItem>
              <MenuItem value={300}>5 minutes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PracticeSettings;