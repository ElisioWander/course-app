import { Box } from "@/app/components/Box";
import Icon from "@/app/components/Icon";

import { DetailsCardInfo } from "./detailsCardInfo";

export function Details() {
  return (
    <Box.Root>
      <Box.Header>
        <Box.Title>Outras Informações</Box.Title>
      </Box.Header>

      <Box.Content>
        <div className="grid grid-flow-row grid-cols-1 items-start gap-3 self-stretch sm:grid-cols-2">
          <DetailsCardInfo
            title="Quantidade de aulas"
            subTitle="50"
            icon={<Icon.Video />}
          />
          <DetailsCardInfo
            title="Horas de Vídeo"
            subTitle="30h"
            icon={<Icon.Time />}
          />
          <DetailsCardInfo
            title="Certificado de conclusão"
            subTitle="Sim"
            icon={<Icon.Time />}
          />
          <DetailsCardInfo
            title="Módulos"
            subTitle="5"
            icon={<Icon.FolderOpen />}
          />
        </div>
      </Box.Content>
    </Box.Root>
  );
}
