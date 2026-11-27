import { Button } from '../Button/Button'

import styles from './NumberPanel.module.css'

export interface NumberPanelProps {
  usedCounts: Record<number, number>
  onNumberSelect: (value: number | null) => void
}

const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const NumberPanel = ({
  usedCounts,
  onNumberSelect
}: NumberPanelProps) => {
  return (
    <div className={styles.panel} data-testid="number-panel">
      <strong>Компонент NumberPanel (заглушка панели цифр 1–9)</strong>
      <div className={styles.buttons}>
        {DIGITS.map((digit) => {
          const isDisabled = (usedCounts[digit] ?? 0) >= 9
          return (
            <Button
              key={digit}
              variant="secondary"
              disabled={isDisabled}
              onClick={() => onNumberSelect(digit)}
            >
              {digit}
            </Button>
          )
        })}
        <Button variant="danger" onClick={() => onNumberSelect(null)}>
          Очистить
        </Button>
      </div>
    </div>
  )
}