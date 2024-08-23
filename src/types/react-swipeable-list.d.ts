// src/@types/react-swipeable-list.d.ts

declare module "react-swipeable-list" {
  import { ComponentType, ReactNode } from "react";

  export interface SwipeableListProps {
    children: ReactNode;
    style?: React.CSSProperties;
    className?: string;
  }

  export const SwipeableList: ComponentType<SwipeableListProps>;

  export interface SwipeableListItemProps {
    children: ReactNode;
    style?: React.CSSProperties;
    className?: string;
    maxSwipe?: number;
    leadingActions?: ReactNode;
    trailingActions?: ReactNode;
  }

  export const SwipeableListItem: ComponentType<SwipeableListItemProps>;

  export interface SwipeActionProps {
    children: ReactNode;
    onClick: () => void;
    destructive?: boolean;
  }

  export const SwipeAction: ComponentType<SwipeActionProps>;

  export interface LeadingActionsProps {
    children: ReactNode;
  }

  export const LeadingActions: ComponentType<LeadingActionsProps>;

  export interface TrailingActionsProps {
    children: ReactNode;
  }

  export const TrailingActions: ComponentType<TrailingActionsProps>;
}
