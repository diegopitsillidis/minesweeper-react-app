
import React, { FC } from 'react';
import styled from '@emotion/styled';

export interface LegendProps {
    /**
     * Feature that should be activated after first+second actions
     */
    feature: string;
    /**
     * First action
     */
    firstAction: string;
}

export const Legend: FC<LegendProps> = ({
    feature,
    firstAction
}) => (
    <Parent>
        <strong>{feature}: </strong>
        <FlagComboParent>
            <FirstAction>{firstAction}</FirstAction>
        </FlagComboParent>
    </Parent>
)

const FlagComboParent = styled.code`
    background: #e3e3e3;
`;

const Parent = styled.legend`
    font-size: 1em;
    margin: 0 auto 2vw;
    line-height: 1.25;
`;

const FirstAction = styled.span`
    color: #ec433c;
`;