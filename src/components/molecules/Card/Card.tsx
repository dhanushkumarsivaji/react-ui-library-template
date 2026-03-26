import { ReactNode } from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Main card content */
  children: ReactNode;
  /** Action buttons at the bottom */
  actions?: ReactNode;
  /** Image URL for card media */
  image?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Image height in pixels */
  imageHeight?: number;
  /** Card elevation (0-24) */
  elevation?: number;
  /** Card variant */
  variant?: 'elevation' | 'outlined';
  /** Additional CSS class */
  className?: string;
  /** Accessible role */
  role?: string;
}

/**
 * Composable card component built on MUI Card.
 * Supports title, subtitle, media, content, and action areas.
 */
const Card = ({
  title,
  subtitle,
  children,
  actions,
  image,
  imageAlt = '',
  imageHeight = 200,
  elevation = 1,
  variant = 'elevation',
  className,
  role = 'article',
}: CardProps) => (
  <MuiCard elevation={elevation} variant={variant} className={className} role={role}>
    {(title || subtitle) && <CardHeader title={title} subheader={subtitle} />}
    {image && <CardMedia component="img" height={imageHeight} image={image} alt={imageAlt} />}
    <CardContent>{children}</CardContent>
    {actions && <CardActions>{actions}</CardActions>}
  </MuiCard>
);

export default Card;
