import React from 'react'
import { fetchAnything } from './fetchAnything'

describe('fetchAnything', () => {
    let mockData
    let url

    beforeEach(() => {
        const url = "www.starwars.com"

        const mockData = {
            name: "Tatooine"
        }

        fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve()
        }))
    })
    
    it("fetch call takes expected url", () => {
        
        fetchAnything(url);
        expect(fetch).toHaveBeenCalledWith(url)
    })

    it("should should return expected data", async () => {

        const result = await fetchAnything(url)
        expect(result).toEqual(mockData)
    })

    it("should show error if response is not ok", async () => {
    
        fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
            ok: false
        }))
        try {
            await fetchAnything(url);
        } catch (error) {
            expect(fetch).toBe("Response is not ok")
        }
        
    })
})