import { IconTrendingDown, IconTrendingUp, IconAlertTriangle } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>SALDO TOTAL DISPONÍVEL</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums text-green-600 @[250px]/card:text-3xl">
            US$ 327.559,83
          </CardTitle>
          <CardAction>
            <Badge
              variant="outline"
              className="text-green-700 border-green-600 bg-green-50 dark:text-green-400 dark:border-green-500 dark:bg-green-950"
            >
              <IconTrendingUp />
              Atualizado agora
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-green-600">
            Todas as contas <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Saldo consolidado de todas as contas</div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>CUSTOS TOTAIS</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums text-red-600 @[250px]/card:text-3xl">
            US$ 338.599,59
          </CardTitle>
          <CardAction>
            <Badge
              variant="outline"
              className="text-red-700 border-red-600 bg-red-50 dark:text-red-400 dark:border-red-500 dark:bg-red-950"
            >
              <IconTrendingDown />
              Monitoramento ativo
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-red-600">
            Despesas operacionais <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">Gastos totais do período atual</div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>RESULTADO FINAL</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums text-red-600 @[250px]/card:text-3xl">
            -US$ 11.039,76
          </CardTitle>
          <CardAction>
            <Badge variant="destructive" className="bg-red-600 text-white dark:bg-red-700">
              <IconAlertTriangle />
              Déficit
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-red-600">
            Atenção necessária <IconAlertTriangle className="size-4" />
          </div>
          <div className="text-muted-foreground">Resultado negativo requer análise</div>
        </CardFooter>
      </Card>
    </div>
  )
}
