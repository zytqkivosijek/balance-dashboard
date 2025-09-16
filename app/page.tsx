import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  DollarSign,
  Shield,
  Wallet,
  Bitcoin,
  CreditCard,
  Building,
  Users,
  Code,
  Target,
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Saldo Total Disponível */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">SALDO TOTAL DISPONÍVEL</CardTitle>
                <div className="p-2 bg-green-100 rounded-full">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
              </div>
              <Badge variant="secondary" className="w-fit text-xs bg-green-50 text-green-700">
                ● Atualizado agora
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">US$ 327.559,83</div>
              <p className="text-xs text-green-600 mt-1">↗ Todas as contas</p>
            </CardContent>
          </Card>

          {/* Custos Totais */}
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">CUSTOS TOTAIS</CardTitle>
                <div className="p-2 bg-red-100 rounded-full">
                  <TrendingDown className="h-4 w-4 text-red-600" />
                </div>
              </div>
              <Badge variant="secondary" className="w-fit text-xs bg-red-50 text-red-700">
                ● Monitoramento ativo
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">US$ 338.599,59</div>
              <p className="text-xs text-red-600 mt-1">↗ Despesas operacionais</p>
            </CardContent>
          </Card>

          {/* Resultado Final */}
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">RESULTADO FINAL</CardTitle>
                <div className="p-2 bg-blue-100 rounded-full">
                  <DollarSign className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <Badge variant="secondary" className="w-fit text-xs bg-red-50 text-red-700">
                ● Atenção necessária
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">-US$ 11.039,76</div>
              <Badge variant="destructive" className="text-xs mt-1">
                ⚠ Déficit
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Distribuição por Contas */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">Distribuição por Contas</CardTitle>
                  <p className="text-sm text-gray-600">Análise detalhada dos ativos por categoria</p>
                </div>
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  8 contas ativas
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* GUARDA */}
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">GUARDA</p>
                    <p className="text-xs text-gray-600">2,2% do total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">US$ 7.367,39</p>
                  <Progress value={2.2} className="w-16 h-1 mt-1" />
                </div>
              </div>

              {/* OLD GOLD (BTC) */}
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-100 rounded-full">
                    <Bitcoin className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium">OLD GOLD (BTC)</p>
                    <p className="text-xs text-gray-600">7,4% do total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">US$ 24.300,05</p>
                  <Progress value={7.4} className="w-16 h-1 mt-1" />
                </div>
              </div>

              {/* PAY RETAILERS */}
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <CreditCard className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">PAY RETAILERS</p>
                    <p className="text-xs text-gray-600">39,2% do total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">US$ 128.383,86</p>
                  <Progress value={39.2} className="w-16 h-1 mt-1" />
                </div>
              </div>

              {/* SQALA */}
              <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-full">
                    <Building className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium">SQALA</p>
                    <p className="text-xs text-gray-600">3,0% do total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">US$ 9.695,84</p>
                  <Progress value={3.0} className="w-16 h-1 mt-1" />
                </div>
              </div>

              {/* CRYPTO PAY */}
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <Bitcoin className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium">CRYPTO PAY</p>
                    <p className="text-xs text-gray-600">2,0% do total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">US$ 6.550,52</p>
                  <Progress value={2.0} className="w-16 h-1 mt-1" />
                </div>
              </div>

              {/* NEW GOLD */}
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Wallet className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">NEW GOLD</p>
                    <p className="text-xs text-gray-600">44,1% do total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">US$ 144.562,17</p>
                  <Progress value={44.1} className="w-16 h-1 mt-1" />
                </div>
              </div>

              {/* NEW GOLD 2 */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <Shield className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">NEW GOLD 2</p>
                    <p className="text-xs text-gray-600">0,0% do total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">US$ 0,00</p>
                  <Progress value={0} className="w-16 h-1 mt-1" />
                </div>
              </div>

              {/* ADS (Conta Simples) */}
              <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-100 rounded-full">
                    <Target className="h-4 w-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium">ADS (Conta Simples)</p>
                    <p className="text-xs text-gray-600">2,0% do total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">US$ 6.700,00</p>
                  <Progress value={2.0} className="w-16 h-1 mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Obrigações */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 rounded-full">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">Obrigações</CardTitle>
                  <p className="text-sm text-gray-600">Compromissos financeiros</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Custódia */}
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-l-red-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-100 rounded-full">
                    <Shield className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-red-800">Custódia</p>
                    <p className="text-xs text-red-600">Valor em custódia de terceiros</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-red-600">US$ 229.587,26</p>
                  <Progress value={85} className="w-full h-2 mt-2" />
                </div>
              </div>

              {/* Afiliados */}
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-l-orange-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <Users className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-orange-800">Afiliados</p>
                    <p className="text-xs text-orange-600">Pagamentos pendentes</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-orange-600">US$ 5.000,00</p>
                  <Progress value={25} className="w-full h-2 mt-2" />
                </div>
              </div>

              {/* Quadcode */}
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-l-purple-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Code className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-purple-800">Quadcode</p>
                    <p className="text-xs text-purple-600">Dívida com Quadcode</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-purple-600">US$ 15.000,00</p>
                  <Progress value={60} className="w-full h-2 mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
