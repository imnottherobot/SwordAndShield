import KingPawn from './KingPawn';
import PawnType from '../../enums/pawn_type.enum';
import ShieldPawn from './ShieldPawn';
import SwordPawn from './SwordPawn';
import Empty from './Empty';

interface PawnProps {
    type: number;
}

export default function RenderPawn({ type }: PawnProps) {
    if (type === PawnType.KING) {
        return (
            <KingPawn />
        );
    }

    if (type === PawnType.SHIELD) {
        return (
            <ShieldPawn />
        );
    }

    if (type === PawnType.SWORD) {
        return (
            <SwordPawn />
        );
    }

    return (
        <Empty />
    );
}
