export interface StatusIndicatorProps {
    status: 'normal' | 'warning' | 'critical' | 'off' | 'ok';
    size?: 'sm' | 'md' | 'lg';
  }
  
  export interface MonitoringCardProps {
    title: string;
    icon: string;
    value: string | number;
    unit: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
  }
  
  export interface AlertItemProps {
    system: string;
    status: string;
    indicator: 'normal' | 'warning' | 'critical' | 'off' | 'ok';
  }