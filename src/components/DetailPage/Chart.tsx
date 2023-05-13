import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChevronDown } from 'react-feather';

import Button from '../Button';
import Modal from './Modal';
import { subMonths } from 'date-fns';

interface ChartData
{
    name: string;
    value: number;
    value2: number;
}

interface ChartProps
{
    starData: ChartData[];
    forkData: ChartData[];
    issueData: ChartData[];
}

const Chart = ({ starData, forkData, issueData }: ChartProps) =>
{
    const [showSecondLine, setShowSecondLine] = useState(false);
    const [dataType, setDataType] = useState("Stars");

    const [modalValue, setModalValue] = useState('Select Value');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [timeframe, setTimeframe] = useState(1); // 1 month
    const [timeframeModalOpen, setTimeframeModalOpen] = useState(false);
    const [timeframeModalValue, setTimeframeModalValue] = useState('Select Timeframe');

    const handleModalValueChange = useCallback((newValue: string) =>
    {
        setModalValue(newValue);
        setIsModalOpen(false);
        setDataType(newValue);
    }, []);

    const handleTimeframeChange = useCallback((newTimeframe: number) =>
    {
        setTimeframeModalValue(newTimeframe == 12 ? "1 Year" : newTimeframe + " Months");
        setTimeframeModalOpen(false);
        setTimeframe(newTimeframe);
    }, []);

    const [data, setData] = useState<ChartData[]>([]);

    useEffect(() =>
    {
        const filteredData = dataType === "Stars" ? starData : dataType === "Forks" ? forkData : issueData;
        const pastDate = subMonths(new Date(), timeframe);
        // Filter the data based on the timeframe
        const newFilteredData = filteredData.filter(dataPoint =>
        {
            const [day, month, year] = dataPoint.name.split("/").map(Number);
            const date = new Date(year, month - 1, day);
            return date >= pastDate;
        });
        setData(newFilteredData);
    }, [dataType, starData, forkData, issueData, timeframe]);


    const toggleModal = useCallback(() =>
    {
        setIsModalOpen(prevState => !prevState);
    }, []);



    return (
        <div className='border-b border-border-color py-8 px-7 flex flex-row'>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 30, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis label={{ value: dataType, dy: -130, dx: 25 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                {showSecondLine && <Line type="monotone" dataKey="value2" stroke="#82ca9d" />}
            </LineChart>
            <div className='flex flex-row gap-3 '>
                <div className='h-2'>
                    <Button
                        variant={"normal"}
                        text={showSecondLine ? "Hide Second Line" : "Show Second Line"}
                        onClick={() => setShowSecondLine(!showSecondLine)}
                    />
                </div>

                <div className='flex flex-col w-40'>
                    <Button variant={"normal"} text={modalValue} Icon={ChevronDown} switchOrder={true} onClick={() => { toggleModal(); }} />
                    <Modal isOpen={isModalOpen} onClose={toggleModal}>
                        <Button variant={"noBordernoBG"} text="Stars" fullWidth={true} onClick={() => handleModalValueChange('Stars')} />
                        <Button variant={"noBordernoBG"} text="Forks" fullWidth={true} onClick={() => handleModalValueChange('Forks')} />
                        <Button variant={"noBordernoBG"} text="Issues" fullWidth={true} onClick={() => handleModalValueChange('Issues')} />
                    </Modal>
                </div>

                <div className='flex flex-col w-40'>
                    <Button variant={"normal"} text={timeframeModalValue} Icon={ChevronDown} switchOrder={true} onClick={() => { setTimeframeModalOpen(true); }} />
                    <Modal isOpen={timeframeModalOpen} onClose={() => setTimeframeModalOpen(false)}>
                        <Button variant={"noBordernoBG"} text="1 Month" fullWidth={true} onClick={() => handleTimeframeChange(1)} />
                        <Button variant={"noBordernoBG"} text="3 Months" fullWidth={true} onClick={() => handleTimeframeChange(3)} />
                        <Button variant={"noBordernoBG"} text="6 Months" fullWidth={true} onClick={() => handleTimeframeChange(6)} />
                        <Button variant={"noBordernoBG"} text="1 Year" fullWidth={true} onClick={() => handleTimeframeChange(12)} />
                    </Modal>
                </div>
            </div>
        </div >
    );
};

export default Chart;
