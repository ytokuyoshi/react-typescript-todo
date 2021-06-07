import React, { ReactElement } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const POSITION_LEFT = 'POSITION_LEFT';
const POSITION_RIGHT = 'POSITION_RIGHT';

const CusstomToggleButtons = (props: { onChange?: (isLeftSelected: boolean) => void; leftLabel: string; rightLabel: string }): ReactElement => {
  const { onChange, leftLabel, rightLabel } = props;
  const [alignment, setAlignment] = React.useState<string>(POSITION_LEFT);

  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, newAlignment: string): void => {
    // 未選択は許可しない。未選択の場合、nullでセットされている
    if (!newAlignment) return;

    setAlignment(newAlignment);
    if (onChange) onChange(newAlignment === POSITION_LEFT);
  };

  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
      <ToggleButton value={POSITION_LEFT} aria-label={POSITION_LEFT}>
        {leftLabel}
      </ToggleButton>
      <ToggleButton value={POSITION_RIGHT} aria-label={POSITION_RIGHT}>
        {rightLabel}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CusstomToggleButtons;
