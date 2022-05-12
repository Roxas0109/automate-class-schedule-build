import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export const Chart = ({ chartData }) => {
    return (
        <div>
            <LineChart
                width={700}
                height={300}
                data={chartData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis allowDuplicatedCategory={false} dataKey="term"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    data={chartData.historicalData}
                    dataKey= "completedTermAmount"
                    name="Completed Term Amount"
                    stroke="#FF0000"
                    activeDot={{ r: 8 }}
                /> 
                <Line
                    type="monotone"
                    data={chartData.projectedhistoricalData}
                    dataKey= "projectedTermAmount"
                    name="Projected Term Amount"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </div>
    );
};