import { getStoredCart } from "../utilities/fakeDB";

export const jobsAndDetailData = async () => {
  const jobsData = await fetch("/jobCollection.json");
  const detailsData = await jobsData.json();

  const savedJobData = getStoredCart();

  const initialData = []
  for (const id in savedJobData) {
    const foundJob = detailsData.find(job => job.id === id)
    if (foundJob) {
      const quantity = savedJobData[id]
      foundJob.quantity = quantity
      initialData.push(foundJob)
    }
  }

  return { detailsData, initialData }
};
