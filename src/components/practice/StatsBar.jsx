import { Box, Typography } from '@mui/material';
import { Timer, Speed, Keyboard } from '@mui/icons-material';

const StatsBar = ({ timer, wpm, accuracy }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 3,
        p: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Timer color="primary" sx={{ mr: 1 }} />
        <Box>
          <Typography variant="caption" display="block">Time</Typography>
          <Typography variant="h6">{timer}s</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Speed color="primary" sx={{ mr: 1 }} />
        <Box>
          <Typography variant="caption" display="block">Speed</Typography>
          <Typography variant="h6">{wpm} WPM</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Keyboard color="primary" sx={{ mr: 1 }} />
        <Box>
          <Typography variant="caption" display="block">Accuracy</Typography>
          <Typography variant="h6">{accuracy}%</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatsBar;